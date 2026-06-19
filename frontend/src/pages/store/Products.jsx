/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect,useState } from "react";

import DashboardLayout
from "../../layouts/DashboardLayout";

import {
createProduct,
deleteProduct,
getMyProducts,
updateProduct
}
from "../../api/productAPI";

const emptyForm = {
name:"",
description:"",
category:"",
price:"",
stock:"",
image:""
};

function StoreProducts(){

const [products,setProducts]=
useState([]);

const [form,setForm]=
useState(emptyForm);

const [editingId,setEditingId]=
useState(null);

const [error,setError]=
useState("");

async function loadProducts(){

try{

const res =
await getMyProducts();

setProducts(res.data);

}
catch(err){

console.log(err);

}

}

useEffect(()=>{

loadProducts();

},[]);

function updateField(field,value){

setForm({
...form,
[field]:value
});

}

async function handleSubmit(){

try{

setError("");

const payload = {
...form,
price:Number(form.price),
stock:Number(form.stock || 0)
};

if(editingId){

await updateProduct(editingId,payload);

}
else{

await createProduct(payload);

}

setForm(emptyForm);
setEditingId(null);
loadProducts();

}
catch(err){

console.log(err);

setError(
err.response?.data?.message ||
"Unable to save product"
);

}

}

function startEdit(product){

setEditingId(product._id);

setForm({
name:product.name || "",
description:product.description || "",
category:product.category || "",
price:String(product.price || ""),
stock:String(product.stock || ""),
image:product.image || ""
});

}

async function removeProduct(id){

if(!window.confirm("Delete this product?")){
return;
}

try{

await deleteProduct(id);

loadProducts();

}
catch(err){

console.log(err);

}

}

return(

<DashboardLayout>

<div className="max-w-7xl mx-auto p-4 md:p-6">

<div>

<p className="text-slate-400">

Catalog

</p>

<h1 className="text-4xl font-bold mt-2">

Products

</h1>

</div>

<div className="bg-slate-900 border border-white/5 rounded-3xl p-6 mt-8">

{
error &&
<div className="mb-5 rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-red-300">

{error}

</div>
}

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">

<input
value={form.name}
onChange={(e)=>updateField("name",e.target.value)}
placeholder="Product name"
className="bg-slate-800 rounded-2xl px-4 py-4 outline-none"
/>

<input
value={form.category}
onChange={(e)=>updateField("category",e.target.value)}
placeholder="Category"
className="bg-slate-800 rounded-2xl px-4 py-4 outline-none"
/>

<input
type="number"
value={form.price}
onChange={(e)=>updateField("price",e.target.value)}
placeholder="Price"
className="bg-slate-800 rounded-2xl px-4 py-4 outline-none"
/>

<input
type="number"
value={form.stock}
onChange={(e)=>updateField("stock",e.target.value)}
placeholder="Stock"
className="bg-slate-800 rounded-2xl px-4 py-4 outline-none"
/>

<input
value={form.image}
onChange={(e)=>updateField("image",e.target.value)}
placeholder="Image URL"
className="bg-slate-800 rounded-2xl px-4 py-4 outline-none"
/>

<input
value={form.description}
onChange={(e)=>updateField("description",e.target.value)}
placeholder="Description"
className="bg-slate-800 rounded-2xl px-4 py-4 outline-none"
/>

</div>

<div className="flex flex-wrap gap-3 mt-5">

<button
onClick={handleSubmit}
className="px-6 py-3 rounded-2xl bg-blue-500 hover:bg-blue-600 transition"
>

{editingId ? "Update Product" : "Add Product"}

</button>

{
editingId &&
<button
onClick={()=>{
setEditingId(null);
setForm(emptyForm);
}}
className="px-6 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 transition"
>

Cancel

</button>
}

</div>

</div>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-8">

{
products.map(product=>(

<div
key={product._id}
className="bg-slate-900 border border-white/5 rounded-3xl p-6"
>

<h2 className="text-2xl font-semibold">

{product.name}

</h2>

<p className="text-slate-400 mt-2">

{product.category || "General"}

</p>

<p className="text-slate-400 mt-4">

₹{product.price} • Stock {product.stock}

</p>

<div className="flex gap-3 mt-6">

<button
onClick={()=>startEdit(product)}
className="px-5 py-3 rounded-2xl bg-blue-500"
>

Edit

</button>

<button
onClick={()=>removeProduct(product._id)}
className="px-5 py-3 rounded-2xl bg-red-500/20 text-red-300 border border-red-500/20"
>

Delete

</button>

</div>

</div>

))
}

</div>

</div>

</DashboardLayout>

);

}

export default StoreProducts;
