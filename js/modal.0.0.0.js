function modalCss() {
  GM_addStyle(`<style>
.modal {
display: none;
position: fixed; /* Stay in place front is invalid - may break your css so removed */
padding-top: 100px;
left: 0;
right:0;
top: 0;
bottom: 0;
overflow: auto;
background-color: rgb(0,0,0);
background-color: rgba(0,0,0,0.4);
z-index: 9999;
}
.modal-body{
height: 650px;
overflow-y: auto;
}
</style>`);
}

function createModal(modalId) {
  $("body")
    .prepend(`<div class="modal fade bd-example-modal-lg" id="${modalId}Modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                  <div class="modal-content">
                    <div class="modal-header" id="${modalId}ModalHeader">
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&#x274C;</span>
                      </button>
                      <h5 class="modal-title" id="${modalId}Title"><center></center></h5>
                      <div id="${modalId}DivHeader"></div>
                    </div>
                    <div class="modal-body" id="${modalId}ModalBody"></div>
                    <div class="modal-footer" id=${modalId}ModalFooter>
                      <button type="button" class="btn btn-danger" data-dismiss="modal">Schließen</button>
                      <div class="pull-left">v ${GM_info.script.version}</div>
                    </div>
                </div>
              </div>`);
}
