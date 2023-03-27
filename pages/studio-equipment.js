import EquipmentList from "../components/EquipmentList"
import Header from "../components/Header"

const StudioEquipment = () => { 
   return ( 
      <>
         <div className="page__padding"/>
         <Header headerName="Studio Equipment" />
         <div className="content__container">
            <EquipmentList/>
         </div>
      </>
   )
}

export default StudioEquipment
