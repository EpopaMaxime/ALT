import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock } from 'lucide-react'; // Icône de verrou pour indiquer la désactivation

const CompteDesactiver = () => {

    localStorage.removeItem('token');
    localStorage.removeItem('iduser');
    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                className="flex flex-col items-center gap-4 p-6 bg-red-100 rounded-lg py-52"
            >
                <Lock className="w-16 h-16 text-red-500" />
                <h2 className="text-2xl font-bold text-red-700">Compte désactivé</h2>
                <p className="text-center text-red-600">
                    Votre compte a été désactivé avec succès. Si vous souhaitez le réactiver, 
                    veuillez contacter notre support. En attendant, vous ne pourrez plus accéder à vos données.
                </p>
                <p className="text-center text-red-500">
                    Merci de votre compréhension.
                </p>
            </motion.div>
        </AnimatePresence>
    );
}

export default CompteDesactiver;
