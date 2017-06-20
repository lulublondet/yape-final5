'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  if(state.register == false){
       wrapper.append(Inicio()); 
     }
 
   if(state.register == true){
    wrapper.append(Registrate())
  };


  root.append(wrapper);
}

const state = {
  user: null,
  status: null,
  register: false
 
};


$( _ => {
  const root = $('#root');
  render(root);
  state.doRender = render.bind(null,root);
});
