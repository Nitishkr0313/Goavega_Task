import express from 'express';
import { v4 as uuidv4 } from 'uuid';
uuidv4(); //'9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

const router = express.Router();

const product=[{
     
    Product_No:1,
    Product_Title:"Electronic Product",
    Product_Description:"Once you got the product then you can't replace"
}
];

router.get('/',(req,res) =>{
    //console.log(product);
    res.send(product);
});
router.post('/',(req,res) =>{
   //console.log('post route reached')
    const pro =req.body;
    const product_Id=uuidv4(); //'9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
    product.push({ ...product,id:uuidv4() });
    product.push(pro); 

   res.send(`product with tha product_Id ${pro.Product_ID} added the database!`);
});
  router.get('/:id',(req,res) => {
      const {id}=req.params;
      const foundProduct=product.find((prot) => prot.id== id);
     
      res.send(foundProduct);

  });
   router.delete('/:id',(req,res) => {
       const {id}=req.params;
       product=product.filter((pro) => pro.id !=id);
       res.send(`product with the id ${id} deleteed from the database.`);
   });
   
      router.put('/:id',(req,res) =>{
          const {id}=req.params;
          const {Product_No,Product_Name,Product_Description }=req.body;
          const prot=product.find((prot) => prot.id==id);
          if(Product_No){
              prot.Product_No=Product_No;
          }    
          if(Product_Name){
            prot.Product_Name=Product_Name;
        }   
        if(Product_Description){
            prot.Product_Description=Product_Description;
        }  
        res.send(`Product with the id ${id}has been updated`); 
        });

        
export default router;