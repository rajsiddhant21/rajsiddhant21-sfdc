import Navigation from "./Navigation"

function Header({ state, dispatch }) {
    return (
        <div>
            <Navigation state={state} dispatch={dispatch} />
        </div>
    )
}

export default Header
