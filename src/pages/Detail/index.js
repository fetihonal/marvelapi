import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Row, Col } from 'reactstrap';
import { useGetDetailData, useGetComicsData } from '../../services/getDataService';

import './index.scss'

const Detail = (props) => {
    const { id, } = useParams();
    const [load, setLoad] = useState(false);

    const { data } = useGetDetailData(id);
    const { comics } = useGetComicsData(id);
    const { name, description, thumbnail } = data;
    useEffect(() => {
        if (data.length !== 0) {
            setLoad(true);
        }
    }, [data]);
    return (
        <>
            {load &&
                <Row className="detailCard">
                    <Col md={3} >
                        <figure className="imgWrapper">
                            <img src={thumbnail.path + "/detail.jpg"} width="100%" alt='' />
                        </figure>
                    </Col>
                    <Col>
                        <h2 className="name">{name}</h2>
                        <div className="title">
                            Description
                        </div>
                        <p>{description ? description : 'Description not found'}</p>
                        {comics.length > 0 && <div className="title">
                            Comics
                        </div>}
                        {comics && comics.map((i) => <div className="comicsItem">{i.title}</div>)}

                    </Col>
                </Row>}
        </>
    );
};
export default Detail;