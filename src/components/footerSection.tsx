import React from "react";
import Logo from "./logo";
import { Facebook, Instagram, Youtube } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="container py-10 mt-16 bg-slate-900 flex justify-center">
      <div className="max-w-7xl text-white flex md:flex-row flex-col justify-between gap-5">
        <div className="w-56">
          <Logo />
        </div>
        <div className="grid gap-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
          <div className="space-y-2.5">
            <h5 className="text-lg font-medium">Features</h5>
            <div className="space-y-1 text-slate-500 font-medium">
              <p>Management</p>
              <p>Communication</p>
              <p>Analytics</p>
            </div>
          </div>
          <div className="space-y-2.5">
            <h5 className="text-lg font-medium">Success stories</h5>
            <div className="space-y-1 text-slate-500 font-medium">
              <p>Avoburger</p>
              <p>StarCoffee</p>
              <p>Forest Hotdogs</p>
            </div>
          </div>
          <div className="space-y-2.5">
            <h5 className="text-lg font-medium">Social Media</h5>
            <div className="space-y-1 text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <Instagram size={20} />
                <p>Instagram</p>
              </div>
              <div className="flex items-center gap-2">
                <Facebook size={20} />
                <p>Faceboox</p>
              </div>
              <div className="flex items-center gap-2">
                <Youtube size={20} />
                <p>Youtube</p>
              </div>
            </div>
          </div>
          <div className="space-y-2.5">
            <h5 className="text-lg font-medium">Contact</h5>
            <p className="space-y-1 text-slate-500 font-medium">
              123 Main Street, Cityville, Stateville, ZIP Code
            </p>
            <p className="space-y-1 text-slate-500 font-medium">
              name@email.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
