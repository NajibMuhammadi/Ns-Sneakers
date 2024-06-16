import './categoryFooter.css';
import { Link } from 'react-router-dom'

function CategoryFooter() {
  return (
    <div className='category__container'>
      <h1 className='category__title'>Category</h1>
      <div className='category__links-content'>
        <Link className='category__link' to='/'>About</Link>
        <Link className='category__link' to='/'>Our locations</Link>
        <Link className='category__link' to='/'>Contact</Link>
      </div>
      
    </div>
  )
}

export default CategoryFooter
