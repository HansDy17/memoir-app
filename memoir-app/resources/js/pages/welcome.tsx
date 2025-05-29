import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Welcome">
                {/* Calligraphic font import */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap"
                    rel="stylesheet"
                />
                {/* Existing fonts */}
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>

            <div className="flex min-h-screen flex-col bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
                {/* Header with calligraphic logo text and nav */}
                <header className="mb-6 w-full max-w-4xl mx-auto flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <img
                            src="/memoir-logo.png"
                            alt="Memoir Logo"
                            className="h-15 w-auto"
                        />
                        <h1
                            className="text-4xl md:text-5xl leading-tight dark:text-[#EDEDEC]"
                            style={{ fontFamily: '"Dancing Script", cursive' }}
                        >
                            Memoir
                        </h1>
                    </Link>
                    <nav className="flex items-center gap-4 text-sm text-[#1b1b18] dark:text-[#EDEDEC]">
                        {auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="inline-block rounded-sm border border-current px-5 py-1.5 leading-normal hover:border-opacity-50 dark:border-current"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    className="inline-block rounded-sm border border-transparent px-5 py-1.5 leading-normal hover:border-current"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="inline-block rounded-sm border border-current px-5 py-1.5 leading-normal hover:border-opacity-50 dark:border-current"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </nav>
                </header>

                {/* Main hero section */}
                <div className="flex w-full flex-grow items-center justify-center lg:items-stretch lg:justify-center">
                    <main className="flex w-full max-w-4xl flex-col-reverse items-center gap-6 lg:flex-row lg:gap-12">
                        {/* Text block */}
                        <div className="flex-1 flex flex-col items-center lg:items-start space-y-4 p-6 text-[#1b1b18] dark:text-[#EDEDEC]">
                            <h2 className="text-4xl font-semibold leading-tight">
                                Welcome! Kamusta thesis dol?
                            </h2>
                            <p className="text-base text-center lg:text-left">
                                A modern, open-source note-saving platform built with Laravel and Inertia.js.
                            </p>
                            <Link
                                href={route('login')}
                                className="inline-block rounded-sm bg-[#191400] px-6 py-2.5 text-sm font-medium text-white hover:bg-[#191400e0] dark:bg-[#3E3E3A] dark:text-white dark:hover:bg-[#62605b]"
                            >
                                Get Started
                            </Link>
                        </div>

                        {/* Highlighted man image */}
                        <div className="flex-1 flex items-center justify-center p-6">
                            <img
                                src="/idle.png"
                                alt="Highlighted Man"
                                className="max-h-96 w-auto object-contain rounded-xl shadow-lg"
                            />
                        </div>
                    </main>
                </div>

                <div className="hidden h-14.5 lg:block"></div>
            </div>
        </>
    );
}
