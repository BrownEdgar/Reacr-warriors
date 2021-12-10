

function Child(props) {
    return (
        <div>
            <p>{props.data.join('-')}</p>
        </div>
    )
}

export default Child;
