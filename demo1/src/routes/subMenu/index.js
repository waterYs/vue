import MyTable1 from 'pages/table1/index.vue'
const form1={
  path:'/form1',
  name:'form1'
};
const form2={
  path:'/form2',
  name:'form2'
};
const form3={
  path:'/form3',
  name:'form3'
};
const table1={
  path:'/table1',
  name:'table1',
  component:MyTable1
};
const table2={
  path:'/table2',
  name:'table2'
};
const table3={
  path:'/table3',
  name:'table3'
};
export default Object.assign({form1},{form2},{form3},{table1},{table2},{table3})
