import React from 'react';

const ChampionInfo = ({match}) => {
    return (
        <div>
            <h3>Champion Information</h3>
            <div>
                id : {match.params.id}
            </div>
            <div>
                id가 {match.params.id}번인 챔피언의 정보를 보여줍니다.
            </div>

        </div>
    )

}

export default ChampionInfo