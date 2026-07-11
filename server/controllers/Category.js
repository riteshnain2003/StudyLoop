const tag=require("../models/category");

exports.createCategory=async(req,res)=>{
    try{//fetch data
      console.log("hi in create category contoler")
        const{name,description}=req.body;
        //validation
        if(!name||!description){
            return res.status(401).json({
                success:false,
                message:"all feilds are required"
            })
        }
        //create entry in db
        const saveDb=await tag.create({
            name,description
        })
        console.log(saveDb)
        res.status(200).json({
            success:true,
            message:"Category create successfully"
        })


    }catch(error){
        console.log(error)
        return res.status(500).json({
            success:false,
            message:"something went wrong during creating a category "
        })

    }
}

exports.getAllCategory=async(req,res)=>{
    try{ 
        const allCategory=await tag.find({},{name:true,descritpion:true})
        console.log(allCategory)
        res.status(200).json({
            success:true,
            message:"all category returned successfully",
            allCategory
        })
    }catch(error){
        return res.status(500).json({
            success:false,
            message:"something went wrong during returned all categories "
        })
    }
}




//categoryPageDetails 

exports.categoryPageDetails = async (req, res) => {
    try {
      const { categoryId } = req.body
      console.log(categoryId);
      // Get courses for the specified category
      const selectedCategory = await Category.findById(categoryId)
        .populate({path:"course"})
        .exec()
  
      
      // Handle the case when the category is not found
      if (!selectedCategory) {
        console.log("Category not found.")
        return res
          .status(404)
          .json({
             success: false, 
            message: "Category not found" })}
      
  
      // Get courses for other categories
      const differentCategory = await Category.find({
        _id: { $ne: categoryId },
      }).populate({
          path: "courses",
        }).exec()

      // Get top-selling courses across all categories
      
      res.status(200).json({
        success: true,
        data: {
          selectedCategory,
          differentCategory,
          mostSellingCourses,
        },
      })
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error.message,
      })
    }
  }
