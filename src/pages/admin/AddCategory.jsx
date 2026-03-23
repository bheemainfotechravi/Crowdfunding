import { useState, useEffect } from "react";
import axiosInstance from "../../api/axiosInstance";

const AddCategory = () => {
  const [categories, setCategories] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    image: null,
    preview: null,
  });

  // ================= GET =================
  const fetchCategories = async () => {
    try {
      const res = await axiosInstance.get("/admin/category/get");

      if (res.data.success) {
        setCategories(res.data.data);
      }
    } catch (error) {
      console.log("Fetch Error:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // ================= INPUT =================
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      const file = files[0];
      setFormData({
        ...formData,
        image: file,
        preview: file ? URL.createObjectURL(file) : null,
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // ================= ADD MODAL =================
  const openAddModal = () => {
    setEditId(null);
    setFormData({ name: "", image: null, preview: null });
    setShowModal(true);
  };

  // ================= EDIT =================
  const handleEdit = (item) => {
    setEditId(item.id);
    setFormData({
      name: item.category_name,
      image: null,
      preview: `http://localhost:5000/uploads/${item.image}`,
    });
    setShowModal(true);
  };

  // ================= SUBMIT (ADD + UPDATE) =================
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const form = new FormData();
      form.append("category_name", formData.name);
      form.append("admin_id", 1);

      if (formData.image) {
        form.append("image", formData.image);
      }

      if (editId) {
        // UPDATE
        await axiosInstance.patch(`/admin/category/update/${editId}`, form, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        // CREATE
        await axiosInstance.post("/admin/category/create", form, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      fetchCategories();
      setShowModal(false);

    } catch (error) {
      console.log("Submit Error:", error);
    }
  };

  // ================= DELETE =================
  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`admin/category/delete/${id}`, {
        data: { admin_id: 1 },
      });

      fetchCategories();
    } catch (error) {
      console.log("Delete Error:", error);
    }
  };

  return (
    <div className="p-4 md:p-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-xl md:text-2xl font-semibold">
          Category Management
        </h1>

        <button
          onClick={openAddModal}
          className="bg-[#9c3353] text-white px-4 py-2 rounded-md"
        >
          + Add Category
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
            <tr>
              <th className="p-4 text-left">#</th>
              <th className="p-4 text-left">Image</th>
              <th className="p-4 text-left">Category</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {categories.map((item, index) => (
              <tr key={item.id} className="border-t">
                <td className="p-4">{index + 1}</td>

                <td className="p-4">
                  <img
                    src={`http://localhost:5000/uploads/${item.image}`}
                    className="w-12 h-12 rounded object-cover"
                  />
                </td>

                <td className="p-4">{item.category_name}</td>

                <td className="p-4 text-center space-x-2">
                  
                  <button
                    onClick={() => handleEdit(item)}
                    className="px-3 py-1 bg-blue-500 text-white rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(item.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded"
                  >
                    Delete
                  </button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
          <div className="bg-white p-6 rounded w-full max-w-md">

            <h2 className="mb-4">
              {editId ? "Edit Category" : "Add Category"}
            </h2>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Category Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border mb-3"
                required
              />

              <input type="file" name="image" onChange={handleChange} />

              {formData.preview && (
                <img
                  src={formData.preview}
                  className="w-16 h-16 mt-2"
                />
              )}

              <div className="flex justify-end mt-4 gap-2">
                <button onClick={() => setShowModal(false)}>Cancel</button>
                <button className="bg-[#9c3353] text-white px-4 py-2 rounded">
                  {editId ? "Update" : "Save"}
                </button>
              </div>
            </form>

          </div>
        </div>
      )}
    </div>
  );
};

export default AddCategory;