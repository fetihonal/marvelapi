import { useEffect, useState } from 'react';
import { Row, Col } from 'reactstrap';

import CharacterCard from '../CharacterCard';
import './index.scss'

const CharacterList = (props) => {
    const { data } = props;
    const [load, setLoad] = useState(false);

    useEffect(() => {
        if (data.length !== 0) {
            setLoad(true);
        }
    }, [data]);

    return (
        <Row>
            {load ? data?.characters.map((i) => <Col md={2} className="mb-4"><CharacterCard key={i.id} data={i} /></Col>) : 'Yükleniyor...'}
        </Row>

    );
};
export default CharacterList;