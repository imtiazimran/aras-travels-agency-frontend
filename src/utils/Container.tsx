const Container = ({children, className}: {children: React.ReactNode, className?: string}) => {
    return (
        <div className={` max-w-[1200px] mx-auto px-5 ${className}`}>
          {children}
        </div>
    );
};

export default Container;
