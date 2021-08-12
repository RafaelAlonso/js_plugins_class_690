// 1. yarn add package
// 2. criar arquivo para ser responsavel por aquele plugin
// 3. importar o que for necessario (vide documentacao do plugin)
// 4.1 utilizar conforme documentacao orienta
// 4.2 caso haja options, ver como elas funcionam para conseguirmos personalizar a execucao do plugin
// 5. guardar utilizacao em uma funcao
// 6. exportar funcao
// 7. importar funcao no arquivo principal (index.js)
// 8. executar a funcao

import Sortable from 'sortablejs';

const initSortable = () => {
  const el = document.getElementById('movies-list');
  const sortable = Sortable.create(el, {
    ghostClass: "ghost",
    animation: 150,
    onEnd: (event) => {
      alert(`${event.oldIndex} moved to ${event.newIndex}`);
    }
  });
}

export { initSortable }