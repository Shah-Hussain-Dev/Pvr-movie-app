import { ModalPortal } from "react-native-modals"
import { PlaceContext } from "./src/context/PlaceContext"
import Navigation from "./src/navigations/StackNavigation"

const App = () => {
  return (
   <>
   <PlaceContext>
    <Navigation/>
    <ModalPortal/>
   </PlaceContext>
   </>
  )
}

export default App

