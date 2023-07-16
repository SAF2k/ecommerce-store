interface ContainerProps {
    children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
    return (
        <div className="mx-auto px-4">
            {children}
        </div>
    )
}

export default Container