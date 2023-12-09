import ServerProtectedComponent from "../components/ServerProtectedComponent"

export default function Layout({
    children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <ServerProtectedComponent>
        {children}
    </ServerProtectedComponent>
    </>
  )
}