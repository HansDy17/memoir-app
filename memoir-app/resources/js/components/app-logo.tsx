import AppLogoIcon from './app-logo-icon';

export default function AppLogo() {
    return (
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
                href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap"
                rel="stylesheet"
            />
            
            <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-md">
                <AppLogoIcon className="size-5 fill-current text-white dark:text-black" />
            </div>
            <div className="ml-1 grid flex-1 text-left text-sm">
                <h1
                    className="text-4xl md:text-3xl leading-tight dark:text-[#EDEDEC]"
                    style={{ fontFamily: '"Dancing Script", cursive' }}
                >
                    Memoir
                </h1>
            </div>
        </>
    );
}
