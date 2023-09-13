import authorImg from "../../assets/images/author.jpg"
const Header = () => {
  return (
   <div>
     <div className="flex justify-between items-center my-10">
        <h1 className="text-3xl">Knowledge Cafe</h1>
        <img className="w-10 h-10 rounded-full" src={authorImg} alt="author image" />
    </div>
    <hr />
   </div>
  )
}

export default Header