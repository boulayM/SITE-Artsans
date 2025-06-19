import Card from 'react-bootstrap/Card';
import Atdm from '../services/Artisans DuMois';
import { CardBody } from 'react-bootstrap';

const AtdmCard = (props) => {
    const artisanData = Atdm ();

    return (

        <Card>
            <CardBody>
                {artisanData}
            </CardBody>
        </Card>
    )
}

export default AtdmCard