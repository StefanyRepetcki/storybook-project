export default {
  title: 'DOCUMENTAÇÃO/NavBar',
  argTypes: {
   colorbutton: {
     control: {
       type: 'select',
       options: [
         'btn btn-primary',
         'btn btn-secondary',
         'btn btn-success',
         'btn btn-danger',
         'btn btn-warning',
         'btn btn-info',
         'btn btn-light',
         'btn btn-dark',
         'btn btn-link',
       ],
     },
   },
   colornavbar: {
      control: {
         type: 'select',
         options: [
           'navbar navbar-dark bg-primary',
           'navbar navbar-dark bg-secondary',
           'navbar navbar-dark bg-success',
           'navbar navbar-dark bg-danger',
           'navbar navbar-dark bg-warning',
           'navbar navbar-dark bg-info',
           'navbar bg-light text-dark border',
           'navbar navbar-dark bg-dark',
           'navbar bg-white text-dark',
         ],
       },
   }
 },
};

export const NavBar = (args: any, { argTypes }: any) => ({
  props: Object.keys(argTypes), 
  template: `
<nav :class="colornavbar">
  <div class="container-fluid">
    <a class="navbar-brand"><img :src="logo" alt="logo" height="30" height="60"></a>
    <form class="d-flex">
      <input class="form-control me-2" type="search" :placeholder="label" aria-label="Search">
      <input type="button" :class="colorbutton" :value="botao">
    </form>
  </div>
</nav>`,
});

NavBar.args = {
   label: 'Pesquise aqui',
   botao: 'Pesquisar',
   colorbutton: 'btn btn-info',
   colornavbar: 'navbar bg-light text-dark border',
   logo: 'https://cdn.pixabay.com/photo/2017/07/10/19/42/logo-2491236_960_720.png',
 }; 
