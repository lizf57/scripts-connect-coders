import './footer.css' 

const Footer = () => {
    return (
      <>
         <footer>
            <div className='footer-container'>
                    <div className='footer-text'>about</div>
                    <div className='footer-text'>developers</div>
                    <div className='footer-text'>careers</div>
            </div>
            <div>
            <div className='footer-copyright'>&copy; 2023 scripts. All rights reserved.</div>

            </div>

         </footer>
      </>
    )
 }
 
 export default Footer


// import { useLocation, useNavigate } from 'react-router-dom';

// const Footer = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   return (
//     <footer>
      
//     </footer>
//   );
// };

// export default Footer;
