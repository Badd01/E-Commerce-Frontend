import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  openAddForm,
  closeAddForm,
  closeEditForm,
  openEditForm,
} from "../redux/features/shopSlice";
import {
  closeAddFormProducts,
  closeEditFormProducts,
} from "../redux/features/productsSlice";

const useManager = () => {
  const dispatch = useDispatch();

  const handleAdd = (type) => {
    dispatch(openAddForm(type));
  };

  const handleCloseAddForm = () => {
    dispatch(closeAddForm());
  };

  const handleCloseEditForm = () => {
    dispatch(closeEditForm());
  };

  const handleCloseAddFormProducts = () => {
    dispatch(closeAddFormProducts());
  };

  const handleCloseEditFormProducts = () => {
    dispatch(closeEditFormProducts());
  };

  const showToast = (message, type) => {
    toast[type](message);
  };

  const handleEdit = (type, item) => {
    dispatch(openEditForm({ type, item }));
  };

  return {
    handleAdd,
    handleCloseAddForm,
    handleCloseEditForm,
    showToast,
    handleEdit,
    handleCloseEditFormProducts,
    handleCloseAddFormProducts,
  };
};

export default useManager;
