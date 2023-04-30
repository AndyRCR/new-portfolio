import React, { useContext, useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import assets from '../../utils/assets'
import { ModelContext } from '../../context/ModelGlobalContext'

export const Cat = (props) => {
	const group = useRef()
	const { nodes, materials, animations } = useGLTF(assets.models.catmodel)
	const { actions } = useAnimations(animations, group)

	useEffect(() => {
		Object.values(actions).forEach((action) => action.play())
	}, [])

	return (
		<group ref={group} {...props} dispose={null}>
			<group name='Scene'>
				<group
					name='Sketchfab_model'
					position={[-1.2, 0.96, -1.28]}
					rotation={[-Math.PI / 2, 0, -0.79]}
					scale={0.01}
				>
					<group name='root'>
						<group
							name='GLTF_SceneRootNode'
							rotation={[Math.PI / 2, 0, 0]}
						>
							<group
								name='RootNode_(gltf_orientation_matrix)_0'
								rotation={[-Math.PI / 2, 0, 0]}
							>
								<group name='RootNode_(model_correction_matrix)_1'>
									<group
										name='catfbx_2'
										rotation={[Math.PI / 2, 0, 0]}
									>
										<group name='_3'>
											<group name='RootNode_4'>
												<group name='_5'>
													<group name='GLTF_created_0'>
														<group name='_10' />
														<group name='_8' />
														<group name='_9' />
														<primitive
															object={
																nodes.GLTF_created_0_rootJoint
															}
														/>
														<skinnedMesh
															name='Object_12'
															geometry={
																nodes.Object_12
																	.geometry
															}
															material={
																materials.Material_81
															}
															skeleton={
																nodes.Object_12
																	.skeleton
															}
														/>
														<skinnedMesh
															name='Object_14'
															geometry={
																nodes.Object_14
																	.geometry
															}
															material={
																materials.Material_105
															}
															skeleton={
																nodes.Object_14
																	.skeleton
															}
														/>
														<skinnedMesh
															name='Object_16'
															geometry={
																nodes.Object_16
																	.geometry
															}
															material={
																materials.Material_93
															}
															skeleton={
																nodes.Object_16
																	.skeleton
															}
														/>
													</group>
												</group>
											</group>
										</group>
									</group>
								</group>
							</group>
						</group>
					</group>
				</group>
			</group>
		</group>
	)
}

useGLTF.preload(assets.models.catmodel)
