import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { type BreadcrumbItem } from '@/types';
// import { Button } from '@headlessui/react';
import { Head, Link } from '@inertiajs/react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
// import { Link } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create New Product',
        href: '/products/create',
    },
];

export default function Index() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create a New Product" />
            <div className="w-8/12 p-4">
                <form>
                    <div className='gap-4 mb-4'>
                        <Label htmlFor="name" className="block text-sm font-medium">
                            Product Name
                        </Label>
                        <Input placeholder='Enter product name' id="name" name="name" className="mt-1 block w-full" />
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}
