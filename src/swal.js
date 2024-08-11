import Swal from 'sweetalert2';

export default Swal.mixin({
  color: '#000',
  confirmButtonColor: '#48C78E',
  cancelButtonColor: '#FF6685',
  showCancelButton: true,
  reverseButtons: true,
  allowOutsideClick: false,
});