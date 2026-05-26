function Check() {
    const handleClick = () => {
        process("Guna", () => console.log("Done"));
    };

    return (
        <div>
            <h1>Click below to run callback</h1>
            <button onClick={handleClick}>Run</button>
        </div>
    );
}
export default Check