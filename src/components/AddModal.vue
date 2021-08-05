<template>
  <div class="modal fade" id="delModal" tabindex="-1" role="dialog"
       aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
    <div class="modal-dialog" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-success text-white">
          <h5 class="modal-title">
            購物提醒
          </h5>
          <button type="button" class="btn-close"
                  data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          已加入購物車 感謝購買~
        </div>
        <div class="modal-footer">
         
          <button type="button" class="btn btn-danger"
             @click.prevent="hideModal">確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Modal from "bootstrap/js/dist/modal";
export default {
  
  data() {
    return {
      modal: '',
    };
  },
   methods: {
    showModal() {
      this.modal.show();
    },
    hideModal() {
      this.modal.hide();
    },
   
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
};
</script>