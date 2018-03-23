<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use App\Entity\Member;

class MemberType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('author', TextType::class)
            ->add('title', TextType::class)
            ->add('avatarUrl', TextType::class,
                array(
                    'required' => false,
                    'empty_data' => 'http://wiseheartdesign.com/images/articles/default-avatar.png')
                )
            ->add('description', TextareaType::class, array(
                'required' => false))
            ->add('save', SubmitType::class, array('label' => 'Ajouter un membre'))
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => Member::class,
        ));
    }
}