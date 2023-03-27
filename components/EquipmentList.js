const EquipmentList = () => { 
   return (
      <ul className="equipment__list"> 
         <li key={Math.random()}> COMPUTER            <ul>
               <li key={Math.random()}> Mac Studio </li>
            </ul>
         </li> 
         <li key={Math.random()}> MONITORING
            <ul> 
               <li key={Math.random()}> Main Monitors
                  <ul>
                     <li key={Math.random()}> 2x Yamaha HS8 Studio Monitors </li>
                     <li key={Math.random()}> 2x T10S Studio Subwoofers </li>
                     <li key={Math.random()}> Digitally tuned using Sonarworks Sound ID Reference </li>
                  </ul>
               </li>
               <li> Reference Monitors 
                  <ul>
                     <li key={Math.random()}> 2x Avantone MixCubes (Active) </li>
                     <li key={Math.random()}> Digitally tuned using Sonarworks SoundID Reference </li>
                  </ul>
               </li>
            </ul>
         </li>
         <li key={Math.random()}> AUDIO INTERFACES 
            <ul>
               <li key={Math.random()}> Apollo x8p </li>
               <li key={Math.random()}> Zoom H8 </li>
            </ul>
         </li>
         <li key={Math.random()}> MICROPHONES 
            <ul>
               <li key={Math.random()}> Rode NTK </li>
               <li key={Math.random()}> Shure SM7B </li>
               <li key={Math.random()}> Shyre SM57 Match Pair </li>
               <li key={Math.random()}> Lewitt LCT 040 Match Pair </li>
               <li key={Math.random()}> Zoom H8 XYH-6 </li>
               <li key={Math.random()}> Zoom H8 SSH-6 </li>
            </ul>
         </li>
         <li key={Math.random()}> POWER CONDITION & UPS
            <ul>
               <li key={Math.random()}> 2x Radial Power-1 Conditioners </li>
               <li key={Math.random()}>Furman F1000UPS </li>
            </ul>
         </li>
         
      </ul>
   )
}

export default EquipmentList
