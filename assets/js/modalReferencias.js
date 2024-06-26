class ModalReferencais extends HTMLElement {
    connectedCallBack() {
        this.innerHTML = 
        <div class="modal fade" id="modalReferencias" tabindex="-1" role="dialog" aria-labelledby="TituloModalCentralizado" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title" id="TituloModalCentralizado">Referências Bibliográficas</h1>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                </div>
            </div>
        </div>;
    }
}

customElements.define('modal-referencias', ModalReferencais);