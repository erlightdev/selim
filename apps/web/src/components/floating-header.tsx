import { Button, buttonVariants } from "@selim/ui/components/button";
import { Sheet, SheetContent, SheetFooter } from "@selim/ui/components/sheet";
import { cn } from "@selim/ui/lib/utils";
import { MenuIcon } from "lucide-react";
import { ShieldCheck } from "@phosphor-icons/react";
import React from "react";

export function FloatingHeader() {
	const [open, setOpen] = React.useState(false);

	const links = [
		{
			label: "Features",
			href: "#",
		},
		{
			label: "Pricing",
			href: "#",
		},
		{
			label: "About",
			href: "#",
		},
	];

	return (
		<header
			className={cn(
				"sticky top-5 z-50",
				"mx-auto w-full max-w-3xl rounded-lg border shadow",
				"bg-background/95 backdrop-blur-lg supports-[backdrop-filter]:bg-background/80",
			)}
		>
			<nav className="mx-auto flex items-center justify-between p-1.5">
				<a
					href="/"
					className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-1 duration-100 hover:bg-accent"
				>
					<div className="flex size-7 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-400 to-indigo-700 text-white shadow-[0_8px_20px_-8px_rgba(79,70,229,0.6)]">
						<ShieldCheck className="size-4" weight="fill" />
					</div>
					<p className="font-semibold text-base tracking-tight">Selim</p>
				</a>
				<div className="hidden items-center gap-1 lg:flex">
					{links.map((link) => (
						<a
							key={link.label}
							className={buttonVariants({ variant: "ghost", size: "sm" })}
							href={link.href}
						>
							{link.label}
						</a>
					))}
				</div>
				<div className="flex items-center gap-2">
					<Button size="sm">Login</Button>
					<Sheet open={open} onOpenChange={setOpen}>
						<Button
							size="icon"
							variant="outline"
							onClick={() => setOpen(!open)}
							className="lg:hidden"
						>
							<MenuIcon className="size-4" />
						</Button>
						<SheetContent
							className="gap-0 bg-background/95 backdrop-blur-lg supports-[backdrop-filter]:bg-background/80"
							showClose={false}
							side="left"
						>
							<div className="grid gap-y-2 overflow-y-auto px-4 pt-12 pb-5">
								{links.map((link) => (
									<a
										key={link.label}
										className={buttonVariants({
											variant: "ghost",
											className: "justify-start",
										})}
										href={link.href}
									>
										{link.label}
									</a>
								))}
							</div>
							<SheetFooter>
								<Button variant="outline">Sign In</Button>
								<Button>Get Started</Button>
							</SheetFooter>
						</SheetContent>
					</Sheet>
				</div>
			</nav>
		</header>
	);
}
