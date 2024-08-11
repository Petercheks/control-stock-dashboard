import Swal from 'sweetalert2/dist/sweetalert2.js';

export default Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true,
});
