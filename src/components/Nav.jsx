import "./nav.css";


import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";

export const Nav = ({ brands, search, setSearch, handleSearch }) => {

  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  const [menu, setSubmenu] = useState(false)

  const handleMenu = () => {
    setSubmenu(!menu)
  }



  return (
    <>
      <div className="boxed">
        <div className="overlay"></div>

        <div className="preloader">

        </div>

        <section id="header" className="header">


          <div className="header-middle ">
            <div className="nav-container">
              <div className="row">


                <div className={nav ? "m-navbar fixed  top-0 left-0 w-[80%] pt-4 border-r border-r-gray-900 h-full bg-[#252B48] text-white ease-in-out duration-500" : "m-navbar fixed left-[-100%] ease-out duration-500"}>
                  <ul className=" ullist m-4 uppercase" >
                    <li className="list">
                      <a href="/" title="">
                        Home
                      </a>
                    </li>

                    <li className="list" onClick={handleMenu}>
                      <a >
                        Laptops-By-Brands {" "}<i className="fa fa-caret-down" aria-hidden="true" ></i>
                      </a>

                      {menu ? <>
                        <div className="submenu"  >
                          {brands.map(brand => (
                            <li className="link">
                              <a href={`/shop/${brand.id}`}>
                                <i
                                  className="fa fa-angle-right"
                                  aria-hidden="true"
                                ></i>
                                {brand.name}
                              </a>
                            </li>
                          ))}
                        </div>
                      </> : ""}
                    </li>

                    <li className="list" >
                      <a href="/shop" title="">
                        Shop
                      </a>
                    </li>
                    <li className="list" >
                      <a href="/about" title="">
                        About
                      </a>
                    </li>

                    <li className="list" >
                      <a href="/contact" title="">
                        Contact
                      </a>
                    </li>

                  </ul>
                </div>

                <div className="col-md-4 logobox" >
                  <div id="logo" className="logo ">
                    <a href="/" className="row" title="">

                      <div className="col-4 p-0">
                        <img src="/logo.png" alt="SCI" />
                      </div>

                      <div className="col-8 titlename">
                        <div className="top-title">
                          <h2>Standard</h2>
                        </div>
                        <div className="bottom-title">
                          <h5>Computer International</h5>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="navbaricon" onClick={handleNav}>
                    {!nav ? <DehazeIcon /> :
                      <CloseIcon />}
                  </div>
                </div>

                <div className="col-md-5">
                  <div className="top-search">
                    <form
                      className="form-search"
                      onSubmit={(e) => { e.preventDefault(); search && handleSearch() }}
                      acceptCharset="utf-8"
                    >
                      <div className="box-search">
                        <input
                          type="text"
                          value={search}
                          onChange={(e) => { setSearch(e.target.value) }}
                          name="search"
                          placeholder="Search Search Product Here..."
                        />
                        <span className="btn-search">
                          <button type="submit" className="waves-effect">
                            <i className=" fa fa-search" />
                          </button>
                        </span>
                        {/* <div className="search-suggestions">
                          <div className="box-suggestions">
                            <div className="title">Search Suggestions</div>
                            <ul>
                              <li>
                                <div className="image">
                                  <img
                                    src="/images/product/other/s05.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="info-product">
                                  <div className="name">
                                    <a href="#" title="">
                                      Razer RZ02-01071500-R3M1
                                    </a>
                                  </div>
                                  <div className="price">
                                    <span className="sale">NRP 5000.00</span>
                                    <span className="regular">NPR2,999.00</span>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="image">
                                  <img
                                    src="/images/product/other/s06.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="info-product">
                                  <div className="name">
                                    <a href="#" title="">
                                      Notebook Black Spire V Nitro VN7-591G
                                    </a>
                                  </div>
                                  <div className="price">
                                    <span className="sale">NRP 2024.00</span>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="image">
                                  <img
                                    src="/images/product/other/14.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="info-product">
                                  <div className="name">
                                    <a href="#" title="">
                                      Apple iPad Mini G2356
                                    </a>
                                  </div>
                                  <div className="price">
                                    <span className="sale">NPR9000.00</span>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="image">
                                  <img
                                    src="/images/product/other/02.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="info-product">
                                  <div className="name">
                                    <a href="#" title="">
                                      Razer RZ02-01071500-R3M1
                                    </a>
                                  </div>
                                  <div className="price">
                                    <span className="sale">NRP5000.00</span>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="image">
                                  <img
                                    src="/images/product/other/l01.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="info-product">
                                  <div className="name">
                                    <a href="#" title="">
                                      Apple iPad Mini G2356
                                    </a>
                                  </div>
                                  <div className="price">
                                    <span className="sale">NRP2004.00</span>
                                    <span className="regular">NRP2,999.00</span>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="image">
                                  <img
                                    src="/images/product/other/s08.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="info-product">
                                  <div className="name">
                                    <a href="#" title="">
                                      Beats Snarkitecture Headphones
                                    </a>
                                  </div>
                                  <div className="price">
                                    <span className="sale">NRP9000.00</span>
                                    <span className="regular">NRP2,999.00</span>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="box-cat">
                            <div className="cat-list-search">
                              <div className="title">Categories</div>
                              <ul>
                                <li>
                                  <a href="#">Networking & Internet Devices</a>
                                </li>
                                <li>
                                  <a href="#">Laptops, Desktops & Monitors</a>
                                </li>
                                <li>
                                  <a href="#">Hard Drives & Memory Cards</a>
                                </li>

                                <li>
                                  <a href="#">Computer Accessories</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div> */}
                      </div>
                    </form>
                  </div>
                </div>

                <div className="col-md-3 thirdpart" >

                  <div >
                    <ul className="flat-support">
                      <div>
                        <a href="tel:01-5913642" title="">
                          <i className="fa fa-phone" aria-hidden="true"></i>
                          <b> Need Help ? 01-591364 </b>
                        </a>
                      </div>
                    </ul>
                  </div>


                  <div >
                    <ul className="social-list">
                      <li>
                        <a href="#" title="">
                          <WhatsAppIcon />
                        </a>
                      </li>

                      <li>
                        <a href="#" title="">
                          <FacebookIcon />
                        </a>
                      </li>

                      <li>
                        <a href="#" title="">
                          <InstagramIcon />
                        </a>
                      </li>

                    </ul>
                  </div>

                </div>

              </div>
            </div>
          </div>

          <div className="mainnavbar">
            <ul className=" ullist p-3  uppercase" >

              <li className="hover-underline-animation list" >
                <a href="/" title="">
                  Home
                </a>
              </li>

              <li className=" hover-underline-animation mylist" >
                <a >
                 Laptop by Brands {" "}<i className="fa fa-caret-down" aria-hidden="true" ></i>
                </a>
                  <div className="sublist"  >
                    {brands.map(brand => (
                      <li className="link ">
                        <a className="hover-underline-animation" href={`/shop/${brand.id}`}>
                          <i
                            className="fa fa-angle-right"
                            aria-hidden="true"
                          ></i>
                          {brand.name}
                        </a>
                      </li>
                    ))}
                  </div>
              </li>

              <li className=" hover-underline-animation list" >
                <a href="/shop" title="">
                  Shop
                </a>
              </li>
              <li className=" hover-underline-animation list" >
                <a href="/about" title="">
                  About
                </a>
              </li>

              <li className=" hover-underline-animation list" >
                <a href="/contact" title="">
                  Contact
                </a>
              </li>

            </ul>
          </div>
        </section>




      </div>
    </>
  );
};
