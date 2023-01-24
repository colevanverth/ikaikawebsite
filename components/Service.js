import Button from "../components/Button"; 


const Service = (props) => { 

    return ( 
        <div className='service__container'> 
            <img src={props.imageLink} width='50%'/> 
            <div> <a className='service__tag'> IN PERSON </a> <h3> SOUND MIXING </h3> <p>Here is the first sentence of the description. 
                Here is the second sentence. Here is the third sentence! Here is the fourth sentence! </p>
            <Button text='GET STARTED' className='button__small' />
            </div>
        </div> 
    )
}

export default Service; 