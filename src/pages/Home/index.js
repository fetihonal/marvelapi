import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import CharacterList from '../../components/CharacterList/';

import useGetData from '../../services/getDataService';

const Home = (props) => {
    const [limit] = useState(30);
    const [page, setPage] = useState(0);
    const { data } = useGetData({
        offset: page * limit,
        name: '',
        exactMatch: false,
        sortName: '',
        limit,
    });
    const paging = () => {
        setPage(page + 1)
    };
    return (
        <>
            {data?.characters &&
                <InfiniteScroll dataLength={data?.characters.length}
                    next={paging}
                    hasMore={data?.maxPage > page}>
                    <CharacterList key="test" data={data} />
                </InfiniteScroll>
            }
        </>
    );
};
export default Home;