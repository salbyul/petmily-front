function FindFriend({ nickname }) {
    const link = '/profile?m=' + nickname;
    return (
        <>
            <a href={link}>
                <div className="flex flex-row items-center p-2 m-2 shadow">
                    <img
                        src="https://i.imgur.com/aq39RMA.jpg"
                        className="rounded-full"
                        width="40"
                        alt="icon"
                    />
                    <div className="flex flex-row items-center ml-2">
                        <span className="font-bold mr-1 pr-2">{nickname}</span>
                    </div>
                </div>
            </a>
        </>
    );
}
export default FindFriend;
