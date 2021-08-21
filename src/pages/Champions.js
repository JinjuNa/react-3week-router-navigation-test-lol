import React from 'react';
import { Link } from 'react-router-dom';
import './Champions.css';

const Champion = () => {
    const data = [
        { id: 1, name: '레오나', image: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt8d46ada03ea1da8c/5db05fdf347d1c6baa57be31/RiotX_ChampionList_leona.jpg?quality=90&width=250"},
        { id: 2, name: '룰루', image: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt424f04814efb3aca/5db05fdfe9d7526ab429e538/RiotX_ChampionList_lulu.jpg?quality=90&width=250"},
        { id: 3, name: '모르가나', image: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltc81eece55f126d2d/5db05fe86af83b6d7032c904/RiotX_ChampionList_morgana.jpg?quality=90&width=250"},
        { id: 4, name: '미스포츈', image: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltf36fa7fd7ecb59fb/5db05fe89481396d6bdd01b8/RiotX_ChampionList_missfortune.jpg?quality=90&width=250"},
        { id: 5, name: '소나', image: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt4810827f74fc21b9/5db06003347d1c6baa57be49/RiotX_ChampionList_sona.jpg?quality=90&width=250"},

    ]

    return (
        <div>
            <h3>Champions</h3>
            <div className="champions-container">
                {
                    data.map((item) => {
                        return (
                            <div className="champions-item">
                                <Link to={"/champion_info/" + item.id}>
                                    <img src={item.image} alt={item.name} />
                                    <p>{item.name}</p>
                                </Link>
                            </div>
                        )
                        
                    })
                }
            </div>

        </div>
    )

}

export default Champion