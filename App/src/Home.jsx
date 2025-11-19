function Home(ptrops) {
    return(
        <div>
        <h1>Hello {props.n} The age is {props.age}</h1>
        <Contact fn = {props.n} />
        </div>
    )
}

export default Home;