// import axios from 'axios';
// import Swal from 'sweetalert2';

// export const deleteProduct = async (id) => {
//   const isConfirm = await Swal.fire({
//     title: 'Sure to Delete?',
//     text: "You won't be able to undo this operation",
//     icon: 'warning',
//     showCancelButton: true,
//     confirmButtonColor: '#3085d6',
//     cancelButtonColor: '#d33',
//     confirmButtonText: 'yes, delete it',
//   }).then((result) => {
//     return result.isConfirmed;
//   });

//   if (!isConfirm) {
//     return;
//   }
//   await axios
//     .delete(`https://shopping-api-7cy0.onrender.com/api/products/${id}`)
//     .then(({ data }) => {
//       Swal.fire({
//         icon: 'success',
//         text: data.message,
//       });
//     })
//     .catch(({ response: { data } }) => {
//       Swal.fire({
//         text: 'Error :' + data.message,
//         icon: 'error',
//       });
//     });
// };
