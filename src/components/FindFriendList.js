import FindFriend from './FindFriend';

function FindFriendList({ list }) {
    return (
        <>
            {list &&
                list.map((friend) => {
                    return (
                        <FindFriend
                            key={friend.id}
                            nickname={friend.nickname}
                        />
                    );
                })}
        </>
    );
}
export default FindFriendList;
