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
           'navbar bg-light text-dark',
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
    <a class="navbar-brand">Navbar</a>
    <form class="d-flex">
      <input class="form-control me-2" type="search" :placeholder="label" aria-label="Search">
      <button :class="colorbutton" type="submit">Search</button>
    </form>
  </div>
</nav>`,
});

// @ts-ignore
NavBar.args = {
   label: 'Button',
   colorbutton: 'btn btn-danger',
   colornavbar: 'navbar navbar-dark bg-primary',
 }; 
