import Header from "./Header"

const Layout = ({children}) => {
  return (
    <div className="container mx-auto px-4">
        <Header />
        <div className="mt-5">
            {children}
        </div>
    </div>
  )
}

export default Layout;