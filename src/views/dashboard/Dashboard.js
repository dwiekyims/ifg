import React from 'react';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faHourglass } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

{/* <div class="text-sm mt-3"> Apply <FontAwesomeIcon style={{marginRight:"5px"}} icon={faShareNodes} /> Share <FontAwesomeIcon icon={faAngleRight} /> </div> */}

export default function Talent() {
  return( 
  <div>
  
  <div class="flex absolute justify-start ml-5">
  <div class="flex flex-col md:flex-row md:max-w-xl mt-1">
  <div class="grid grid-cols-2">
  <div class=""><img class="mb-5" style={{width:"250px", height:"150px"}} src="https://static.republika.co.id/uploads/member/images/news/m7cuvbnbzx.jpg" /></div>
  <div class="flex justify-start text-3xl">
    <div> <b>Javacript Developer</b> <br/> <div class="text-lg mt-1"> PT Codeid Development Indonesia </div> <div class="text-base mt-1"><FontAwesomeIcon icon={faDollarSign} /> IDR 10.000.000 - 15.000.000/month</div> <div class="text-base mt-1"><FontAwesomeIcon icon={faBuilding} /> Software Enginnering</div> <div class="space-x-6 text-sm mt-3"><FontAwesomeIcon style={{marginRight:"5px"}} icon={faHourglass} /> Full Time <FontAwesomeIcon style={{marginRight:"5px"}} icon={faBriefcase} /> 5 - 10 tahun pengalaman</div> <div class="space-x-9 text-sm mt-3"><FontAwesomeIcon style={{marginRight:"5px"}} icon={faLocationDot} /> Jakarta <FontAwesomeIcon style={{marginRight:"5px"}} icon={faClock} /> Dibuat 1 hari lalu</div> <div class="space-x-4 text-sm mt-7">Apply <FontAwesomeIcon style={{marginLeft:"160px",marginRight:"5px"}} icon={faShareNodes} /> Share <FontAwesomeIcon icon={faAngleRight} /> </div></div>
  </div>
  </div>
  </div>
  </div>
  
  <p class="absolute text-5xl ml-5" style={{marginTop:"230px"}}> ______________________________</p>
  <p class="absolute text-2xl ml-8" style={{marginTop:"320px"}}>Description</p>
  <p class="absolute ml-8" style={{marginTop:"390px"}}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet justo <br/>
    nibh. Quisque faucibus vitae magna eget gravida. Maecenas faucibus, ipsum <br/>
    fringilla fermentum, turpis dolor pretium ipsum, vel cursus ligula velit vel diam. <br/>
    Maecenas tempus maximus tristique amet.
  </p>

  <p class="absolute text-2xl ml-8" style={{marginTop:"560px"}}>Primary Skills</p>

  <p class="absolute text-2xl ml-8" style={{marginTop:"670px"}}>Secondary Skills</p>

  <div class="flex absolute justify-start ml-5">
  <div class="flex flex-col md:flex-row md:max-w-xl border-2 border-black" style={{marginTop:"800px"}}>
  <div class="grid grid-cols-2">
  <p class="text-2xl"> Tentang Perusahaan </p>
  <div class=""><img class="mb-5" style={{width:"250px", height:"150px"}} src="https://static.republika.co.id/uploads/member/images/news/m7cuvbnbzx.jpg" /></div>
  <p class="flex justify-start text-3xl">Javacript Developer <br/> PT Codeid</p>
  </div>
  </div>
  </div>

  {/* kolom kanan */}

  <div class="flex justify-center text-2xl mt-7" style={{marginLeft:"420px"}}><b>Similiar jobs for you</b></div>
  <div class="flex justify-end mr-5">
  <div class="flex flex-col rounded-lg bg-white shadow-lg mt-4">
  <div class="grid grid-cols-2">
  <div class=""><img class="mb-5" style={{width:"250px", height:"150px"}} src="https://1.bp.blogspot.com/-_y-S6SdNbw8/XzEh4tCM_lI/AAAAAAAAIA8/IA8Xyqbdi4Egx018V9dqTVNLAmlPQHSLwCLcBGAsYHQ/s1600/Perum%2BPeruri.png" /></div>
  <p class="flex justify-start text-3xl">Javacript Developer <br/> PT Codeid</p>
  <div class="ml-3"><FontAwesomeIcon icon={faLocationDot} /> Jakarta</div>
  <div class="col-span-2 ml-3"><FontAwesomeIcon icon={faSuitcase} /> 3 - 5 tahun</div>
  <div class="ml-3"><FontAwesomeIcon icon={faCalendarCheck} /> Actively Hiring</div>
  <div style={{marginLeft:"90px"}}><FontAwesomeIcon icon={faClock} /> Dibuat 1 hari lalu</div>
  </div>  
  </div>
  </div>

  <div class="flex justify-end mr-5">
  <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg mt-10">
  <div class="grid grid-cols-2">
  <div class=""><img class="mb-5" style={{width:"250px", height:"150px"}} src="data:image/png;base64,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" /></div>
  <p class="flex justify-start text-3xl">Javacript Developer <br/> PT Codeid</p>
  <div class=""><FontAwesomeIcon icon={faLocationDot} /> Jakarta</div>
  <div class="col-span-2"><FontAwesomeIcon icon={faSuitcase} /> 3 - 5 tahun</div>
  <div class=""><FontAwesomeIcon icon={faCalendarCheck} /> Actively Hiring</div>
  <div style={{marginLeft:"90px"}}><FontAwesomeIcon icon={faClock} /> Dibuat 1 hari lalu</div>
  </div>  
  </div>
  </div>

  <div class="flex justify-end mr-5">
  <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg mt-10">
  <div class="grid grid-cols-2">
  <div class=""><img class="mb-5" style={{width:"250px", height:"150px"}} src="https://www.freepnglogos.com/uploads/tokopedia/tokopedia-vector-logo-png-gudril-logo-tempat-1.jpg" /></div>
  <p class="flex justify-start text-3xl">Javacript Developer <br/> PT Codeid</p>
  <div class=""><FontAwesomeIcon icon={faLocationDot} /> Jakarta</div>
  <div class="col-span-2"><FontAwesomeIcon icon={faSuitcase} /> 3 - 5 tahun</div>
  <div class=""><FontAwesomeIcon icon={faCalendarCheck} /> Actively Hiring</div>
  <div style={{marginLeft:"90px"}}><FontAwesomeIcon icon={faClock} /> Dibuat 1 hari lalu</div>
  </div>  
  </div>
  </div>

  <div class="flex justify-end mr-5">
  <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg mt-10 mb-10">
  <div class="grid grid-cols-2">
  <div class=""><img class="mb-5" style={{width:"250px", height:"150px"}} src="https://static.republika.co.id/uploads/member/images/news/m7cuvbnbzx.jpg" /></div>
  <p class="flex justify-start text-3xl">Javacript Developer <br/> PT Codeid</p>
  <div class=""><FontAwesomeIcon icon={faLocationDot} /> Jakarta</div>
  <div class="col-span-2"><FontAwesomeIcon icon={faSuitcase} /> 3 - 5 tahun</div>
  <div class=""><FontAwesomeIcon icon={faCalendarCheck} /> Actively Hiring</div>
  <div style={{marginLeft:"90px"}}><FontAwesomeIcon icon={faClock} /> Dibuat 1 hari lalu</div>
  </div>  
  </div>
  </div>
  
  </div>
  )
}