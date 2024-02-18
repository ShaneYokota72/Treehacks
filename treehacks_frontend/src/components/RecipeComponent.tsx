import React from 'react'
import Image from 'next/image'
import { Recipe } from '../util/RecipeType'

interface RecipeComponentProps extends Recipe{
    index: number;
    type: "user" | "chef"
}

export default function RecipeComponent({
    title,
    description,
    imageLink,
    ingredients,
    instructions,
    index,
    type
}: RecipeComponentProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <div key={index} className='flex p-8 flex-col gap-4 w-full bg-slate-200 rounded-lg' onClick={() => {setOpen(!open)}}>
        <img src={imageLink} alt={title} width={500} height={300} className=' w-full height-auto rounded-lg mx-auto'/>
        <div className=''>
            <h2 className='text-3xl font-bold text-[#3e3e3e]'>{title}</h2>
            <p className='text-[#3e3e3e]'>{description}</p>
        </div>
        {
            open && (
                <div>
                    <h3 className='text-2xl font-bold text-[#3e3e3e]'>Ingredients</h3>
                    <ul className='text-[#3e3e3e]'>
                        {ingredients.map((ingredient, index) => (
                          <div className='flex gap-4'>
                            <span>{index+1}. </span><li key={index}>{ingredient}</li>
                          </div>
                        ))}
                    </ul>
                    <h3 className='text-2xl font-bold text-[#3e3e3e]'>Instructions</h3>
                    <ol className='text-[#3e3e3e]'>
                        {instructions.map((instruction, index) => (
                          <div className='flex gap-4'>
                            <span>{index+1}. </span><li key={index}>{instruction}</li>
                          </div>
                        ))}
                    </ol>
                    {
                      type === "user" && (
                        <div className='mt-4 font-medium text-center w-full py-2 px-4 bg-green-300 text-xl' onClick={(e) => {
                          e.stopPropagation();
                          console.log("ask chef");
                        }}>
                          Ask for Chefs to help you cook this recipe
                        </div>
                      )
                    }
                    
                </div>
            )
        }
        {
          type === "chef" && (
            <div className='mt-4 font-medium text-center w-full py-2 px-4 bg-green-300 text-xl' onClick={(e) => {
              e.stopPropagation();
              console.log("help cook chef");
            }}>
              Help User cook this recipe
            </div>
          )
        }
    </div>
  )
}