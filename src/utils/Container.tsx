const Container = ({children, className}: {children: React.ReactNode, className?: string}) => {
    return (
        <div className={` w-[1200px] mx-auto ${className}`}>
          {children}
        </div>
    );
};

export default Container;
