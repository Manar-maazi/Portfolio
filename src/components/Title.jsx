
function Title({title}) {
  return (
    <div>
       <h1 className="m-4 text-3xl text-center font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-5xl mb-10">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-sky-400 font-serif">
         {title }
        </span>
      </h1>
    </div>
  )
}

export default Title
